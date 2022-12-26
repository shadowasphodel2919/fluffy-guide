// import React, { useState, useEffect } from 'react';
const TagCloud = require('TagCloud');
export const Globe = () => {

const container = '.content';
const texts = [
    'Unity', 'C#', 'JavaScript',
    'CSS3', 'Java', 'HTML',
    'Cloud', 'C', 'C++',
    'Git', 'React',
];

const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast'
};

TagCloud(container, texts, options);
    return (<div className='content'>
    </div>);

}