function speak() {
  const text = document.getElementById('text').value;
  if (!text) return alert("Please enter something!");

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
