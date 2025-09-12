// ==UserScript==
// @name         DIO Maximizer
// @namespace    https://github.com/marcosmulinarii
// @version      1.6
// @description  Adiciona um botão para ocultar o menu e maximizar o player de vídeo na plataforma DIO, otimizando a visualização.
// @author       Marcos V. Mulinari
// @match        https://web.dio.me/track/*
// @match        https://web.dio.me/project/*
// @match        https://web.dio.me/lab/*
// @match        https://web.dio.me/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dio.me
// @grant        none
// @homepageURL  https://www.linkedin.com/in/marcosmulinarii
// ==/UserScript==

(function() {
    'use strict';

    const ID_BOTAO = 'dio-maximizer-final-btn';
    const iconeParaAbrir = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
    const iconeParaFechar = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;

    if (!document.getElementById(ID_BOTAO)) {
        const toggleButton = document.createElement('button');
        toggleButton.id = ID_BOTAO;
        document.body.appendChild(toggleButton);

        Object.assign(toggleButton.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            backgroundColor: '#8a4ff5',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: '9999',
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
            opacity: '0',
            transform: 'scale(0.5)',
            transition: 'opacity 0.3s ease, transform 0.3s ease'
        });
    }

    // Função que busca o menu de forma flexível
    function findMenuElement() {
        return document.querySelector("#root ul") || document.querySelector("#root div.track-lessons");
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.closest('#' + ID_BOTAO)) {
            const menu = findMenuElement(); // Usa a nova função de busca
            const player = document.querySelector("#root [data-player]");
            const toggleButton = document.getElementById(ID_BOTAO);

            if (!menu || !player || !toggleButton) return;

            const menuEstaOculto = menu.style.transform === 'translateX(100%)';

            if (!menuEstaOculto) {
                menu.style.transition = 'transform 0.5s ease-in-out';
                menu.style.transform = 'translateX(100%)';
                Object.assign(player.style, {
                    transition: 'all 0.5s ease-in-out',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '1000'
                });
                toggleButton.innerHTML = iconeParaAbrir;
                toggleButton.setAttribute('aria-label', 'Mostrar menu');
            } else {
                menu.style.transform = 'translateX(0)';
                Object.assign(player.style, {
                    position: '',
                    top: '',
                    left: '',
                    width: '100%',
                    height: '100%',
                    zIndex: ''
                });
                toggleButton.innerHTML = iconeParaFechar;
                toggleButton.setAttribute('aria-label', 'Ocultar menu');
            }
        }
    });

    let debounceTimer;
    const verificarEstadoDaPagina = () => {
        const player = document.querySelector("#root [data-player]");
        const toggleButton = document.getElementById(ID_BOTAO);
        const menu = findMenuElement();

        if (!toggleButton) return;

        if (player && menu) {
            toggleButton.style.opacity = '1';
            toggleButton.style.transform = 'scale(1)';

            const menuEstaOculto = menu.style.transform === 'translateX(100%)';
            toggleButton.innerHTML = menuEstaOculto ? iconeParaAbrir : iconeParaFechar;
            toggleButton.setAttribute('aria-label', menuEstaOculto ? 'Mostrar menu' : 'Ocultar menu');
        } else {
            toggleButton.style.opacity = '0';
            toggleButton.style.transform = 'scale(0.5)';
        }
    };

    const observer = new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(verificarEstadoDaPagina, 1000);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(verificarEstadoDaPagina, 2000);

})();