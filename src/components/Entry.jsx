import React from "react";

function Entry(props) {
    return (
        <div className="u-body u-xl-mode card">
            <section className="u-align-left u-clearfix u-image u-section-1" src="" data-image-width="1825" data-image-height="1080"
                id="carousel_ed8d">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h1 className="u-text-palette-1-base u-text-1">Birthday&nbsp;Invitation For {props.name}
                    </h1>
                    <p className="u-text u-text-2">With god’s blessing and your love I am celebrating my 20th birthday on this
                        <b> <u>16th April</u>&nbsp;</b>and I would like you to double my happiness with your
                        presence.&nbsp;Awaiting you! Lots of love.
                    </p>
                    <a href="#" className="u-black u-btn u-button-style u-btn-1">Venue: My Home<br></br>
                    Address: BC 257, Kestopur, Kolkata. Near 7 no. foot bridge
                    </a>
                </div>
            </section>
        </div>
    );
}
export default Entry;