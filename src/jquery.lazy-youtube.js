(function () {
    let lazyYoutubeIframe = function (event) {
        const element = event.currentTarget;

        const vid = element.dataset['youtubeId'];
        const iframe = `<iframe src="https://www.youtube.com/embed/${vid}" frameborder=0 allowfullscreen height="${element.dataset.height}" width="${element.dataset.width}" />`;
        $(element).html(iframe).attr('data-youtube-id', '#' + vid);
    };

    $(document).on('click', '[data-youtube-id]:not([data-youtube-id^="#"])', lazyYoutubeIframe);

    $(document.head).append(`
        <style type="text/css">
            [data-youtube-id] {
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                max-width: 100%;
            }
            [data-youtube-id] img, [data-youtube-id] iframe {
                max-width: 100%;
            }
            [data-youtube-id]:after {
                content: '►';
                margin: auto;
                position: absolute;
                opacity: 0.7;
                background: #fff;
                padding: 10px 12px 10px 14px;
                border-radius: 4px;
                border: 2px solid #333;
            }
            [data-youtube-id^="#"]:after {
                content: '';
                display:none;
                padding: 0;
            }
            [data-youtube-id]:hover:after {
                opacity: 1;
            }
        </style>
    `);
})();