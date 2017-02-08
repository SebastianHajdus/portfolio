$(function () {

console.log('dziala');


// --- dropdownmenu --- //


        var button = document.querySelector('#menu_logo');
        console.log(button);

        var list = document.querySelector('.menu-content');
        console.log(list);

//wylaczanie po kliknieciu w linki

        var a = document.querySelectorAll('.links');
        console.log(a);

        for( i=0; i<a.length; i++) {
          a[i].addEventListener('click', function() {
              list.style.display = 'none';
          });
        }

//wlaczanie guzikiem, pozadane zeby na starcie wlaczal gdy jest wylaczony, a wylaczal gdy jet wlaczony

        button.addEventListener('click', function() { //na guzik nadaje klikanie

            var parent = this.childNode;
            console.log(parent);
/*
            if (list.style.display == 'none') {
                list.style.display = 'block';
            } else {
                list.style.display = 'none';
            }
*/

        if (list.style.display == 'none') {
            list.style.display = 'block';
        } else if (list.style.display = 'block') {
            list.style.display = 'none';
        } else {
            list.style.display = 'none';
        }


        });

        // //div o id menu jest rodzicem
        //parent.style.display = 'block';


});
