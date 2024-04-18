var currentlyPlaying = null;

function playAyahs(ayahId, audioSrc) {
  var button = document.getElementById(ayahId);
  var audio = new Audio(audioSrc);
  if (currentlyPlaying) {
    currentlyPlaying.pause();
  }
  if (currentlyPlaying != audio) {
    audio.play();
    currentlyPlaying = audio;
  } else {
    currentlyPlaying = null;
  }
}

String.prototype.EntoAr = function () {
  return this.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
};
function changeToArabic(number) {
  return number.toString().EntoAr();
}
