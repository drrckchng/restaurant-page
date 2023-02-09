export default function clearPage() {
  const content = document.getElementById("content");
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  }
}
