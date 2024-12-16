import React, { useState, useEffect } from 'react';
import parse from "html-react-parser"

function BlogText(props) {
    function convertToHTML() {
        return <React.Fragment>{parse(props.rawHTML)}</React.Fragment>;
    }
    return (
        <div class='m-auto  mt-3 p-3'>
            {parse(props.rawHTML)}
        </div>
    )
}

export default BlogText;