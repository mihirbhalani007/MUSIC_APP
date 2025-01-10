// all constant and variables

const songData = [
  {
    image:
      "https://m.media-amazon.com/images/I/61uvfmyQeyL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of Arijit singh",
    artistName: "Arijit singh",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/510pIVZrdXL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Hymn of Life",
    artistName: "James Schuyler",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/815QraL6VYL._AA256._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of 2024 India",
    artistName: "Album",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51SPz7ol+CL._UX358_FMwebp_QL85_.jpg",
    songName: "Kodava Wedding Song (From Bromance)",
    artistName: "Govind Vasantha, Sanjith Hegde & Kiran Kaverappa",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81E5BLSdG3L._AA256._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of 2024 International",
    artistName: "Global",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61uvfmyQeyL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of Arijit singh",
    artistName: "Arijit singh",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51oKRm7uEqL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Mollywood Dance Party",
    artistName: "playlist",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81E5BLSdG3L._AA256._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of 2024 International",
    artistName: "Global",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51oKRm7uEqL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Mollywood Dance Party",
    artistName: "playlist",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/815QraL6VYL._AA256._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Best of 2024 India",
    artistName: "Album",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51SPz7ol+CL._UX358_FMwebp_QL85_.jpg",
    songName: "Kodava Wedding Song (From Bromance)",
    artistName: "Govind Vasantha, Sanjith Hegde & Kiran Kaverappa",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/510pIVZrdXL._SX354_SY354_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    songName: "Hymn of Life",
    artistName: "James Schuyler",
    track: "./ASSETS/summer-memories-270159.mp3",
  },
];

const audio = new Audio();
let currentTrackIndex = null; // Corrected the spelling here
const progress = document.querySelector("progress");
const nextButton = document.querySelector(".fa-forward-step");
const prevButton = document.querySelector(".fa-backward-step");
const popupProgress = document.getElementById("popup-progress");

// Elements inside the popup
const popupCover = document.getElementById("popup-cover");
const popupSongName = document.getElementById("popup-song-name");
const popupArtistName = document.getElementById("popup-artist-name");
const playingOverlay = document.getElementById("playing-overlay");
const cardContainer = document.getElementById("card_holder");
const playButton = document.querySelector(".controls i.fa-play");
const popup = document.querySelector(".popup");
const dimBackground = document.querySelector(".dim-background");

// for intro screen
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const appInterface = document.getElementById("app-interface");

  setTimeout(() => {
    splashScreen.style.display = "none";
    appInterface.classList.remove("hidden");
  }, 2000);
});

// card display from songData
songData.forEach(({ image, songName, artistName }, index) => {
  // Added index
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.id = "cover_image";
  img.src = image;
  img.alt = songName;

  const songTitle = document.createElement("div");
  songTitle.id = "song_name";
  songTitle.classList.add("song-title");
  const maxLength = 11;

  songTitle.textContent =
    songName.length > maxLength
      ? songName.slice(0, maxLength) + "..."
      : songName;

  const artist = document.createElement("div");
  artist.id = "artistName";
  artist.textContent =
    artistName.length > maxLength
      ? artistName.slice(0, maxLength) + "..."
      : `By ${artistName}`;

  card.addEventListener("click", () => {
    playMusic(index); // Pass index here
  });

  card.addEventListener("click", () => {
    playMusic(index, card, playingOverlay); // Pass card and overlay to playMusic
  });

  card.appendChild(img);
  card.appendChild(songTitle);
  card.appendChild(artist);
  cardContainer.appendChild(card);
});

// Show popup function
function showPopup(index) {
  // Update popup details
  popupCover.src = songData[index].image;
  popupSongName.textContent = songData[index].songName;
  popupArtistName.textContent = songData[index].artistName;

  // Show the popup and dim background
  popup.style.display = "block";
  dimBackground.style.display = "block";
}

// Hide popup function (optional, e.g., when clicking outside the popup)
dimBackground.addEventListener("click", () => {
  popup.style.display = "none";
  dimBackground.style.display = "none";
});

// play track
function playMusic(index) {
  const card = document.querySelectorAll(".card")[index];
  const img = card.querySelector("img");
  if (currentTrackIndex !== index) {
    audio.src = songData[index].track;
    audio.play();
    currentTrackIndex = index;
    playButton.classList.replace("fa-play", "fa-pause");
    document.querySelectorAll(".card img").forEach((image) => {
      image.style.opacity = "1";
    });
    img.style.opacity = "0.2";

    // Show popup
    showPopup(index);
  } else {
    if (audio.paused) {
      audio.play();
      playButton.classList.replace("fa-play", "fa-pause");
      img.style.opacity = "0.2";
    } else {
      audio.pause();
      playButton.classList.replace("fa-pause", "fa-play");
      img.style.opacity = "1";
    }
  }
}

// event listener for play/pause toggle
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    playButton.classList.replace("fa-pause", "fa-play");
  }
});

// progress bar update as song plays
audio.ontimeupdate = function () {
  if (!audio.duration || audio.duration === Infinity) return;
  popupProgress.value = (audio.currentTime / audio.duration) * 100;
};

// Handle next and previous buttons
nextButton.addEventListener("click", () => {
  let nextIndex =
    currentTrackIndex + 1 < songData.length ? currentTrackIndex + 1 : 0;
  playMusic(nextIndex);
});

prevButton.addEventListener("click", () => {
  let prevIndex =
    currentTrackIndex - 1 >= 0 ? currentTrackIndex - 1 : songData.length - 1;
  playMusic(prevIndex);
});

if (popupProgress) {
  popupProgress.addEventListener("input", function () {
    if (audio.duration && audio.duration !== Infinity) {
      const progressTime = (popupProgress.value / 100) * audio.duration;
      audio.currentTime = progressTime;
    }
  });
}
