import React, { useState } from 'react';
import './App.css';

export default function Cards({ Title, Image, Artist, Color, Lyrics1, Lyrics2, Lyrics2Top, Lyrics2TopPhone, audio }) {
    const [focused, setFocused] = useState(false);
      
    function Focus() {
        setTimeout(() => {
            setFocused(true);
        }, 100);
    }

    function UnFocus(event) {
        event.stopPropagation();
        setFocused(false);
    }

    if (focused) {
        setTimeout(() => {
            document.getElementById("main").style.overflowY = "hidden";
        }, 100);
    } else {
        setTimeout(() => {
            document.getElementById("main").style.overflowY = "scroll";
        }, 100);
    }

    return (
        <div
            id='kaassaus' onClick={Focus}
            style={{ backgroundColor: Color, width: "360px", height: "220px", position: "relative", zIndex: "1", borderRadius: "15px", margin: "15px", cursor: "pointer" }}
            className={focused ? 'focus' : ''}
        >
            <img
                src={Image}
                style={{ width: "55px", borderRadius: "10px", left: "15px", top: "15px", position: "relative", margin: "0" }}
                alt='Album Art'
            />
            <h1 style={{ left: "25%", fontSize: "24px", position: "relative", top: "-45px", fontFamily: "poppins", margin: "0", fontWeight: "600", color: "#00020a" }}>
                {Title}
            </h1>
            <label
                style={{ fontFamily: "verdana", fontWeight: "400", left: "25%", top: "-47.5px", position: "relative", fontSize: "16px", margin: "0" }}
            >
                {Artist}
            </label>
            <p
                className='Lyric1'
                style={{ left: "5%", top: "37.5%", position: "absolute", fontFamily: "poppins", fontSize: "19.5px", margin: "0" }}
            >
                {Lyrics1}
            </p>
            <p
                className='Lyric2'
                style={{ left: "5%", top: Lyrics2Top, position: "relative", fontFamily: "poppins", fontSize: "19.5px", margin: "0" }}
            >
                {Lyrics2}
            </p>
            
            {focused && (
                <>
                    <label onClick={UnFocus} style={{ fontWeight: "600", fontFamily: "poppins", width: "10px", right: "10px", top: "5px", position: "absolute", margin: "0", cursor: "pointer", display: "block", transform: "scale(0.7)" }}>
                        X
                    </label>
                    <audio src={audio} preload="auto" controls style={{width: "400px", height: "25px", bottom: "5px", left: "50%", transform: "translateX(-50%) scale(0.4)", position: "fixed", zIndex: "52", display: "flex !important", borderRadius: "10px"}}></audio>
                </>
            )}
        </div>
    );
}
