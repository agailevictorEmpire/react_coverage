
export default function BackButton(props) {
    return (
        <button
            style={{ padding: 0, margin: 0, border: 0, backgroundColor: props.backgroundColor }}
            onClick={props.handleClickBackwards}
            disabled={props.canGoBack === false}
            title='button_with_image'
        >
            <svg id="Component_408_1" data-name="Component 408 – 1" xmlns="http://www.w3.org/2000/svg" width="96" height="40" viewBox="0 0 96 40">
                <g className='inactive-backward-button' id="Path_776" data-name="Path 776" fill="none">
                    <path d="M4,0H92a4,4,0,0,1,4,4V36a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" stroke="none" />
                    <path d="M 4 2 C 2.897201538085938 2 2 2.897201538085938 2 4 L 2 36 C 2 37.10279846191406 2.897201538085938 38 4 38 L 92 38 C 93.10279846191406 38 94 37.10279846191406 94 36 L 94 4 C 94 2.897201538085938 93.10279846191406 2 92 2 L 4 2 M 4 0 L 92 0 C 94.20912933349609 0 96 1.790855407714844 96 4 L 96 36 C 96 38.20914459228516 94.20912933349609 40 92 40 L 4 40 C 1.790855407714844 40 0 38.20914459228516 0 36 L 0 4 C 0 1.790855407714844 1.790855407714844 0 4 0 Z" stroke="none" fill="#0a425a" />
                </g>
                <g id="Backward_arrow" data-name="Backward arrow" transform="translate(23 -25)">
                    <path id="Path_10" data-name="Path 10" d="M9.5,0,7.773,1.727l6.539,6.539H0v2.468H14.312L7.773,17.273,9.5,19,19,9.5Z" transform="translate(35 55) rotate(180)" fill="#00374e" />
                </g>
            </svg>
        </button>
    );
}