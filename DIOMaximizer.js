// ==UserScript==
// @name         DIO Maximizer
// @namespace    https://github.com/marcosmulinarii
// @version      1.2
// @description  Adiciona um botão para ocultar o menu e maximizar o player de vídeo na plataforma DIO, otimizando a visualização.
// @author       Marcos V. Mulinari
// @match        https://web.dio.me/track/*
// @match        https://web.dio.me/project/*
// @match        https://web.dio.me/lab/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dio.me
// @grant        none
// @homepageURL  https://www.linkedin.com/in/marcosmulinarii
// ==/UserScript==

(function() {
    'use strict';

    const setupButtonLogic = (menu, videoPlayer) => {
        const iconeParaFechar = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
        const iconeParaAbrir = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`;

        const toggleButton = document.createElement('button');
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
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
        });

        let menuEstaVisivel = true;

        const atualizarBotao = () => {
            if (menuEstaVisivel) {
                toggleButton.innerHTML = iconeParaFechar;
                toggleButton.setAttribute('aria-label', 'Ocultar menu');
            } else {
                toggleButton.innerHTML = iconeParaAbrir;
                toggleButton.setAttribute('aria-label', 'Mostrar menu');
            }
        };

        toggleButton.addEventListener('click', () => {
            if (menuEstaVisivel) {
                menu.style.transition = 'transform 0.5s ease-in-out';
                menu.style.transform = 'translateX(100%)';

                Object.assign(videoPlayer.style, {
                    transition: 'all 0.5s ease-in-out',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '1000'
                });
            } else {
                menu.style.transform = 'translateX(0)';

                Object.assign(videoPlayer.style, {
                    position: '',
                    top: '',
                    left: '',
                    width: '100%',
                    height: '100%',
                    zIndex: ''
                });
            }

            menuEstaVisivel = !menuEstaVisivel;
            atualizarBotao();
        });

        atualizarBotao();
        console.log('[DIO Maximizer] Botão de controle adicionado com sucesso!');
    };

    // Tenta encontrar os elementos a cada 500ms
    const intervalId = setInterval(() => {
        const elementoMenu = document.querySelector("#root > div > ul");
        const elementoPrincipal = document.querySelector("#root [data-player]");

        if (elementoMenu && elementoPrincipal) {
            clearInterval(intervalId); // Para de verificar assim que encontra
            setupButtonLogic(elementoMenu, elementoPrincipal);
        }
    }, 500);

})();