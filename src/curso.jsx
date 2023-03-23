import React from 'react'
import { useState } from 'react';
import './curso.css'

function Cursos() {

  const [curso, setCurso] = useState('Curso de react');
  const [software, setSoftware] = useState('Visual Studio Code');
  const [description, setDescription] = useState('Curso de react con Hooks');
  const [image, setImage] = useState('./public/images/3d.jpg')

  const changeCourse = (e) => {

    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setCurso(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeSoftware = (e) => {

    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setSoftware(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeDescription = (e) => {

    e.preventDefault();
    const valueInput = e.target.previousSibling.value;
    setDescription(valueInput)

    e.target.previousSibling.value = '';
  }

  const changeImage = (e) => {
    e.preventDefault();
    const valueInput = e.target.src;
    setImage(valueInput)
  }

  return (
    <div className="Curso overflow-hidden">
      <div className="row">
        <div className="col-12 col-lg-6 caja1" style={{ background: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${image}) center/cover` }} >
          <div>
            <h1 className='text text-dark fw-bold'>{curso}</h1>
            <p className="text text-dark fw-bold">{software}</p>
            <p className='text text-dark' >{description}</p>
            <a href="#" className='i text text-dark'>¡Inscribete!</a>
          </div>
        </div>
        <div className="col-12 col-lg-6 seccion2">
          <div className="mb-3">
            <input className="form-control" placeholder="Nombre del Curso" />
            <button className='ol' onClick={changeCourse}>Actualiar</button>
          </div>
          <div className="mb-3">
            <input className="form-control" placeholder="Software" />
            <button className='ol' onClick={changeSoftware}>Actualiar</button>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder='Descripción' rows="3"></textarea>
            <button className='ol' onClick={changeDescription}>Actualiar</button>
          </div>
          <div>
            <h5 className='text fw-bold'>Nueva imagen:</h5>
            <a href=""><img src="./public/images/3d.jpg" alt="" className='images' onClick={changeImage} /></a>
            <a href=""><img src="./public/images/car.jpg" alt="" className='images' onClick={changeImage} /></a>
            <a href=""><img src="./public/images/code.jpg" alt="" className='images' onClick={changeImage} /></a>
            <a href=""><img src="./public/images/film.jpg" alt="" className='images' onClick={changeImage} /></a>
            <a href=""><img src="./public/images/K6Rz.gif" alt="" className='images' onClick={changeImage} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cursos
