const $ = document.querySelector.bind(document);

const moonPath = "M19.5 27.5C19.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 19.5 12.3122 19.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = $('#darkmode');

const title = $('.title');

let toggle = false;

title.innerText = 'Light Mode';

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo',
    });
    //when click on the sun or the moon
    timeline
        .add({
            targets: ".sun",
            d: [
                {
                    value: toggle ? sunPath : moonPath,
                }
            ],
        })
        .add({
            targets: "#darkmode",
            rotate: toggle ? 0 : 320,
        }, '-= 350')
        .add({
            targets: 'section',
            backgroundColor: toggle ? 'rgb(225,225,225)' : 'rgb(22,22,22)',
        }, '-= 700')
        .add({
            targets: '.title',
            color: toggle ? 'rgb(22,22,22)' : 'rgb(225,225,225)',
        }, '-= 700');

    title.innerText = toggle ? "Light Mode" : "Dark Mode";

    toggle = toggle ? !toggle : true;
});