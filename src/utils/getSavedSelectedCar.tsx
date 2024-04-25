export default function getSelectedCarSaved(key: string) {
    const selectedCarSaved = sessionStorage.getItem(key);
    return selectedCarSaved ? JSON.parse(selectedCarSaved) : null;
}
