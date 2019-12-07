import { elements, css_colors } from '../views/base';

//Plugins imports
import Glide from '@glidejs/glide';
import OverlayScrollbars from 'overlayscrollbars';
import ProgressBar from 'progressbar.js';
import { isAbsolute } from 'path';

export default class Ua {

    //Clear all fill color to default violet_color
    clear_fill_colorAndScale() {
        elements.sidebarIcon.forEach(element => {
            element.style.fill = null;
            element.style.transform = null;
        });

    }

    //Take the clicked Section name
    take_section(section) {
        this.pre_section = section;
    }

    //Apply blur on the Background
    applyBlur() {
        elements.background.classList.add('blur');
        elements.social_icons.classList.add('blur');
        elements.heading.classList.add('blur');
    }

    //home event
    home_event(section_pre) {



        if (section_pre) {
            //Change slider
            section_pre.classList.add('slide-back');
            section_pre.classList.remove('slide');


            setTimeout(() => {
                section_pre.classList.remove('visible_content');
                section_pre.classList.add('hidden_content');
                section_pre.classList.toggle('slide-back');
                elements.hamBarger.click()

            }, 300);
            //clear blur
            setTimeout(() => {
                elements.background.classList.toggle('blur');
                elements.social_icons.classList.toggle('blur');
                elements.heading.classList.toggle('blur');
                elements.section_slide.style.display = 'none';
            }, 300);
        }

        this.pre_section = undefined;

    }


    //Change logo color and scale it
    change_logo_colorAnd_scale(selector) {
        selector.style.fill = css_colors.violet_color;
        selector.style.transform = 'scale(1.4)';
    }

    //slide event
    slider_in_out(section, section_pre) {

        if (section_pre) {//If there have the current and previous section
            if (section === section_pre) {

            } else {
                section_pre.classList.add('slide-back');
                section_pre.classList.remove('slide');
                setTimeout(() => {
                    section_pre.classList.toggle('visible_content');
                    section_pre.classList.toggle('hidden_content');
                    section_pre.classList.toggle('slide-back');
                    elements.main_content.style.overflow = 'hidden_content';

                }, 300);
                setTimeout(() => {
                    section.classList.add('slide');
                    setTimeout(() => {
                        section.classList.toggle('visible_content');
                        section.classList.toggle('hidden_content');
                        elements.main_content.style.overflow = 'visible_content';
                        elements.hamBarger.click()

                    }, 400);
                }, 300);
            }


        } else {
            section.classList.add('slide');
            setTimeout(() => {
                section.classList.toggle('visible_content');
                section.classList.toggle('hidden_content');
                elements.main_content.style.overflow = 'visible_content';
                elements.hamBarger.click()
            }, 400);
        }
    }

    //slider listener for scroll
    slide_listener() {
        let observer = new IntersectionObserver((entries) => {
            console.log('Function isinvoked');
            console.log(entries);
            prompt('hello');

            // setTimeout(()=>{
            //     document.querySelector('.tertiary_header').style.display = 'none';
            // },6000);
        });

        this.observer = observer;


    }

    //Load slider
    carousle_slide() {
        let perview;
        if ( window.screen.availWidth <= '800') {
            perview = 1;
        }else{
            perview = 2;            
        }
        let carousel_slide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: perview,
            autoplay: 4000
        }).mount();

        this.carousle_slider = true;
    }


    //Overlay Scrollbar 
    scrollbar(idname) {

        let element = document.getElementById(`${idname}`);

        let options = {
            className: "os-theme-dark",
            scrollbars: {
                visibility: "auto",
                autoHide: "leave",
                autoHideDelay: 800,
                dragScrolling: true,
                clickScrolling: false,
                touchSupport: true,
                snapHandle: false
            }
        };

        OverlayScrollbars(element, options);
    }

    //Skill progress
    progress_circle(where, value, parcent) {
        //clear ui
        document.querySelectorAll('.skill_progress-circle').forEach(element => {
            element.innerHTML = '';
            // console.log(element);

        });


        for (let index = 0; index < value.length; index++) {
            let circle = new ProgressBar.Circle(where + '-' + index, {
                color: 'white',
                trailWidth: 3,
                trailColor: '#353535',
                strokeWidth: 4,
                text: {
                    value: `${parcent[index]}% <br><span style="font-size: 14px">${value[index]}</span>`,
                    style: {
                        fontSize: '20px',
                        position: 'absolute',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: '1.5',
                        fontWeight: '700',
                        top: '50%',
                        left: '50%',

                        transform: {
                            prefix: true,
                            value: 'translate(-50%, -50%)'
                        }

                    }
                },
            })

            circle.animate(parcent[index] * 0.01)

        }
    }

    //Portfolio eventlistener
    p_click_enent(currItem) {
        let preItem = this.portfolioPreItem;

        if (preItem === undefined) {
            elements.item_1.classList.remove('clicked_item');
            currItem.classList.add('clicked_item')
        } else {
            preItem.classList.toggle('clicked_item')
            currItem.classList.toggle('clicked_item');
        }
        this.portfolioPreItem = currItem;
    }

    //Portfolio card remove
    p_card_remove(...args) {
        args.forEach((arg) => {
            arg.forEach((element) => {
                element.style.display = 'none';
            })
        })
    }

    //Portfolio card add
    p_card_add(...args) {
        args.forEach((arg) => {
            arg.forEach((element) => {
                element.style.display = 'block'
            })
        })
    }

}










