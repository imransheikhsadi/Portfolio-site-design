//Html and Css imports

import '../style/main.scss';
import '../img/home-bg.jpg';
import '../img/icons.svg';




//Js Project imports
import { elements, css_colors } from './views/base';
import * as uaView from './views/userInteracrionsView';
import Ua from './models/UserInteractions'




const state = {};

state.ua = new Ua();
window.sta = state;



//Infinite animations
uaView.animate_text();
//Click events for home
elements.home_logo.addEventListener('click', () => {
    state.ua.home_event(state.ua.pre_section);
    state.ua.clear_fill_colorAndScale();
});

//click events for about,resume,blog,contact,portfolio


elements.about_logo.addEventListener('click', () => {
    sliderEvents(elements.about_section, elements.about_icon, state.ua.pre_section);
    state.ua.scrollbar('about_scroll');

    // state.ua.slide_listener();
    // let options =  document.querySelector('.tertiary_header');
    if (state.ua.carousle_slider) {
        //If the carousle slider is active then fo nothing

    } else {
        setTimeout(() => {
            state.ua.carousle_slide();
        }, 1000);
    }


});


elements.resume_logo.addEventListener('click', () => {
    sliderEvents(elements.resume_section, elements.resume_icon, state.ua.pre_section);
    state.ua.scrollbar('resume_scroll');
    state.ua.progress_circle('#circle', ['Php', 'Illustrator', 'Photoshop', 'AngularJs'], [90, 80, 70, 65]);
});

elements.blog_logo.addEventListener('click', () => {
    sliderEvents(elements.blog_section, elements.blog_icon, state.ua.pre_section);
    state.ua.scrollbar('blog_scroll');

});

elements.contact_logo.addEventListener('click', () => {
    sliderEvents(elements.contact_section, elements.contact_icon, state.ua.pre_section);
});

elements.portfolio_logo.addEventListener('click', () => {
    sliderEvents(elements.portfolio_section, elements.portfolio_icon, state.ua.pre_section);
    state.ua.scrollbar('portfolio_scroll');

});

//Card hover effect

elements.portfolioCard.forEach((element) => {

    //Hover effect
    let highestAngle = 1.5;
    let opacity = .5;

    element.addEventListener('mousemove', (event) => {
        let height = element.clientHeight;
        let width = element.clientWidth;
        let positionX = event.layerX;
        let positionY = event.layerY;

        let angleY = (width / 2 - positionX) / (width / 2) * highestAngle;
        let angle = (width / 2 - positionX) / (width / 2) * 90;
        let angleX = -(height / 2 - positionY) / (height / 2) * highestAngle;

        let controlOpacity = positionY / height * opacity;


        element.style.transform = `perspective(300px) rotateX(${angleX}deg)  rotateY(${angleY}deg)`;
        element.querySelector('.gradient').style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${controlOpacity}) 0%, transparent 100%)`
    });

});


//All slider events
const sliderEvents = (section, icon, section_pre) => {
    elements.section_slide.style.display = null;
    state.ua.clear_fill_colorAndScale();
    state.ua.applyBlur();
    state.ua.take_section(section);
    state.ua.change_logo_colorAnd_scale(icon);
    state.ua.slider_in_out(section, section_pre);
}


//Eventlisteners for portfolio section
elements.item_1.addEventListener('click', () => {
    state.ua.p_click_enent(elements.item_1)
    state.ua.p_card_add(elements.portfolioGraphic, elements.portfolioDesign, elements.portfolioBrand)
});
elements.item_2.addEventListener('click', () => {
    state.ua.p_click_enent(elements.item_2)
    state.ua.p_card_remove(elements.portfolioGraphic, elements.portfolioDesign);
    state.ua.p_card_add(elements.portfolioBrand)

});
elements.item_3.addEventListener('click', () => {
    state.ua.p_click_enent(elements.item_3)
    state.ua.p_card_remove(elements.portfolioBrand, elements.portfolioGraphic);
    state.ua.p_card_add(elements.portfolioDesign)

});
elements.item_4.addEventListener('click', () => {
    state.ua.p_click_enent(elements.item_4)
    state.ua.p_card_remove(elements.portfolioBrand, elements.portfolioDesign);
    state.ua.p_card_add(elements.portfolioGraphic)

});

//Event listener for mobile responsive
elements.hamBarger.addEventListener('click', (event) => {
    var width = window.screen.availWidth;
    console.log(width);
       
    if (width <= 600) {
        if (elements.hamBarger.style.left === '15rem') {
            elements.hamBarger.style.left = '0'
            elements.sideBar.style.left = '-100%'

        } else {
            elements.hamBarger.style.left = '15rem'
            elements.sideBar.style.left = '0'
        }
    }



})