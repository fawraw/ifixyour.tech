// Régénère tous les assets PNG du site par recadrage pur du logo JPEG source.
// Aucun aplat n'est redessiné : le fond marine #192e49 vient du JPEG lui-même,
// donc aucun raccord de couleur possible avec le header et la plaque CSS.
//
// Usage : osascript -l JavaScript tools/make-assets.js
// (macOS uniquement, AppKit via le pont JXA, aucune dépendance)
//
// Repères mesurés sur logo.jpeg (1500x750) :
//   fond uniforme #192e49 (vérifié sur les 4 coins et le centre)
//   logo complet : x 160..1340, y 260..500
//   icône molécule seule : carré x 202..388, y 282..468

ObjC.import('AppKit');

const HERE = $.NSProcessInfo.processInfo.environment.objectForKey('PWD').js;
const SRC = HERE + "/assets/img/logo.jpeg";
const OUT = HERE + "/assets/img/";

const img = $.NSImage.alloc.initWithContentsOfFile(SRC);
const srcRep = $.NSBitmapImageRep.imageRepWithData(img.TIFFRepresentation);
const W = srcRep.pixelsWide, H = srcRep.pixelsHigh;
// size (points) peut différer des pixels : normaliser pour travailler en pixels
img.setSize($.NSMakeSize(W, H));

function render(dstW, dstH, srcX, srcYtop, srcW, srcH, path) {
	const rep = $.NSBitmapImageRep.alloc.initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel(
		null, dstW, dstH, 8, 4, true, false, $.NSCalibratedRGBColorSpace, 0, 0);
	const ctx = $.NSGraphicsContext.graphicsContextWithBitmapImageRep(rep);
	$.NSGraphicsContext.saveGraphicsState;
	$.NSGraphicsContext.setCurrentContext(ctx);
	ctx.setImageInterpolation($.NSImageInterpolationHigh);
	// NSImage : origine en bas à gauche, conversion depuis un y "haut"
	img.drawInRectFromRectOperationFraction(
		$.NSMakeRect(0, 0, dstW, dstH),
		$.NSMakeRect(srcX, H - srcYtop - srcH, srcW, srcH),
		$.NSCompositingOperationCopy, 1.0);
	$.NSGraphicsContext.restoreGraphicsState;
	rep.representationUsingTypeProperties($.NSBitmapImageFileTypePNG, $.NSDictionary.dictionary)
		.writeToFileAtomically(path, true);
	return path;
}

const out = [];
out.push(render(1180, 240, 160, 260, 1180, 240, OUT + 'logo-plaque.png'));
out.push(render(192, 192, 202, 282, 186, 186, OUT + 'icon-192.png'));
out.push(render(180, 180, 202, 282, 186, 186, OUT + 'apple-touch-icon.png'));
out.push(render(32, 32, 202, 282, 186, 186, OUT + 'favicon-32.png'));
out.push(render(1200, 630, 36, 0, 1428, 750, OUT + 'og-image.png'));
out.join('\n');
