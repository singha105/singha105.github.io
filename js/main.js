// Updated main.js with all fixes

$(document).ready(function () {
  // Reset scroll on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Smooth scroll on nav click
  $('.nav-link').click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top - 20
    }, 500);
  });

  // Scroll highlight for nav links
  $(window).on('scroll', function () {
    const scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (refElement.length) {
        const top = refElement.offset().top;
        const height = refElement.outerHeight();
        if (top <= scrollPos + 60 && top + height > scrollPos) {
          $('.nav-link').removeClass("active");
          currLink.addClass("active");
        }
      }
    });
  });

  // Toggle email visibility
  $('#toggleEmail').click(function () {
    const email = $('#emailText');
    if (email.hasClass('d-none')) {
      email.removeClass('d-none');
      $(this).text('Hide Email');
    } else {
      email.addClass('d-none');
      $(this).text('Show Email');
    }
  });

  // Load quote of the day using CORS proxy for ZenQuotes API
  $.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/today'))
    .done(function (response) {
      const data = JSON.parse(response.contents);
      const quote = data[0];
      $('#quote').html(`“${quote.q}”<br><footer class="blockquote-footer mt-2">${quote.a}</footer>`);
    })
    .fail(function () {
      $('#quote').text('Could not load quote. Please check your internet connection or API access.');
    });

  function isInViewport(element) {
  const top = $(element).offset().top;
  const bottom = top + $(element).outerHeight();
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  return (top < scrollTop + windowHeight) && (bottom > scrollTop);
}

function animateSkills() {
  if (isInViewport($('#skills'))) {
    $('.progress-bar').each(function () {
      const target = $(this);
      const width = target.attr('data-width');
      if (target.width() === 0 || target.css('width') === '0%') {
        target.css('width', width);
      }
    });
  } else {
    // Reset bars when not in view
    $('.progress-bar').css('width', '0%');
  }
}

$(window).on('scroll', animateSkills);
$(document).ready(animateSkills);


function updateDigitalClock() {
  const DateTime = luxon.DateTime;

  const now = DateTime.now().setZone("America/New_York"); // Ohio timezone

  const formatted = now.toFormat("cccc, dd LLLL yyyy • hh:mm:ss a ZZZZ"); 
  

  $('#digitalClock').text(formatted);
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();


function drawAnalogClock() {
  const canvas = document.getElementById("analogClock");
  const ctx = canvas.getContext("2d");
  const radius = canvas.height / 2;
  ctx.translate(radius, radius);

  function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // Outer ring
    ctx.strokeStyle = "#333";
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    // Center circle
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();

    // Hour markers
    for (let num = 1; num <= 12; num++) {
      const ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillStyle = "#000";
      ctx.font = `${radius * 0.15}px Oswald`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  function drawHand(ctx, pos, length, width, color = "#000") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  function drawTime(ctx, radius) {
    const now = luxon.DateTime.now().setZone("America/New_York");
    const hour = now.hour % 12;
    const minute = now.minute;
    const second = now.second;


    const hourPos = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60));
    const minPos = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    const secPos = second * Math.PI / 30;

    drawHand(ctx, hourPos, radius * 0.5, 6);
    drawHand(ctx, minPos, radius * 0.75, 4);
    drawHand(ctx, secPos, radius * 0.85, 2, "#dc3545");
  }

  function updateClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawFace(ctx, radius);
    drawTime(ctx, radius);
  }

  setInterval(updateClock, 1000);
}

drawAnalogClock();


 $(document).ready(function () {
  $('#downloadBtn').on('click', function () {
    const successMsg = $('<div class="alert alert-success mt-3" role="alert">Resume Downloaded!</div>');
    
    // Remove any existing alerts to avoid duplicates
    $('.alert').remove();
    
    // Append message below the button
    $(this).after(successMsg);

    // Hide it after 4 seconds
    setTimeout(() => {
      successMsg.fadeOut('slow', function () {
        $(this).remove();
      });
    }, 4000);
  });
});


const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Toggle icon
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // === Joke API every 60s ===
function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then(response => response.json())
    .then(data => {
      const joke = data.type === "single"
        ? data.joke
        : `${data.setup}<br><strong>${data.delivery}</strong>`;
      $("#jokeText").html(joke);
    })
    .catch(() => {
      $("#jokeText").text("Failed to load joke. Please try again later.");
    });
}
fetchJoke();
setInterval(fetchJoke, 60000); // refresh every 60s

// === XKCD Random Comic ===
fetch('https://xkcd.vercel.app/?comic=latest')
  .then(res => res.json())
  .then(data => {
    $('#comicImg').attr('src', data.img).attr('alt', data.alt);
  })
  .catch(err => {
    console.error('XKCD API error:', err);
    $('#comicBox').append("<p class='text-danger mt-2'>Comic could not be loaded.</p>");
  });



  // OpenWeatherMap API – Dayton Weather

// WeatherAPI.com fetch - Replace YOUR_API_KEY with your actual key
const weatherAPIKey = "eb676bdc8fd54856b81184229251906";
const city = "Dayton";

fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}&aqi=no`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('temp').innerText = data.current.temp_c;
    document.getElementById('weather').innerText = data.current.condition.text;
  })
  .catch(error => {
    console.error("Weather API error:", error);
    document.getElementById('weather').innerText = "Unable to fetch weather data.";
  });


// Get a cookie by name
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // Set a cookie
  function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  // Display welcome message
  function showWelcomeMessage() {
    const lastVisit = getCookie("lastVisit");

    const now = new Date();
    const formattedNow = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short"
    });

    if (!lastVisit) {
      document.getElementById("welcomeMessage").textContent =
        "Welcome to my homepage for the first time!";
    } else {
      document.getElementById("welcomeMessage").textContent =
        `Welcome back! Your last visit was on ${lastVisit}`;
    }

    // Save current time for next visit
    setCookie("lastVisit", formattedNow);
  }

  showWelcomeMessage();
});
