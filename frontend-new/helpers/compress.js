import imageCompression from "browser-image-compression";

export const compress = (setter, limit) => async (e) => {
    if (e.target.files.length > limit) return alert(`يسمح بصور عدد ${limit}`);
    const filesObj = e.target.files;
    const files = await Promise.all(
        Object.values(filesObj).map(async (img) => {
            const resized = await imageCompression(img, {
                maxSizeMB: 0.25,
                maxWidthOrHeight: 1920,
            });
            return imageCompression.getDataUrlFromFile(resized);
        })
    );
    setter(files);
};