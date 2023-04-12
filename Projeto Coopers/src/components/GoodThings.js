import React from 'react'
import '../assets/css/GoodThings.css'
import bitmap from '../assets/img/bitmap.png'
import bitmap2 from '../assets/img/bitmap2.png'
import bitmap3 from '../assets/img/bitmap3.png'
import iconeCoopers from '../assets/img/icone-coopers.png'

function GoodThings() {
  return (
    <div id='good-things-background'>
        <section id='good-things'>
            <h1 id='good-things-title'>good things</h1>
            <div id='good-things-imgs'>
                <div id='good-things-imgs-info'>
                    <img id='bitmap' src={bitmap} alt='escritorio' />
                    <img id='icone-coopers' src={iconeCoopers} alt='icone Coopers' />
                    <button id='function'> function </button>
                    <p id='text-imgs'> Organize your daily job enhance your life performance</p>
                    <p id='read-more'>read more</p>
                </div>
                <div id='good-things-imgs-info2'>
                    <img id='bitmap2' src={bitmap2} alt='escritorio' />
                    <img id='icone-coopers2' src={iconeCoopers} alt='icone Coopers' />
                    <button id='function'> function </button>
                    <p id='text-imgs'> Mark one activity as done makes your brain understands the power of doing.</p>
                    <p id='read-more2'>read more</p>
                </div>
                <div id='good-things-imgs-info3'>
                    <img id='bitmap3' src={bitmap3} alt='escritorio' />
                    <img id='icone-coopers3' src={iconeCoopers} alt='icone Coopers' />
                    <button id='function'> function </button>
                    <p id='text-imgs'> Careful with missunderstanding the difference between a list of things and a list of desires.</p>
                    <p id='read-more3'>read more</p>
                </div>
            </div>
            <div id='bolinhas-good'>
                <div id='bolinha-preenchida'></div>
                <div id='bolinhas'></div>
                <div id='bolinhas'></div>
            </div>
        </section>
    </div>
  )
}

export default GoodThings