import React from 'react'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../assets/logo.svg'

const PointCreated = () => {
    return (
        <div id="page-point-created">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/" >
                    <FiArrowLeft />
            Voltar para Home
            </Link>
            </header>

            <main>
            <FiCheckCircle color="2FB86E" size="50" />
            <h1>Cadastro Concluído!</h1>
            </main>


        </div>
    )
}


export default PointCreated