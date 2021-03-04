import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function NotFoundPage() {
    const [errorObject, setErrorObject] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("errorConnect")) {
            setErrorObject(JSON.parse(localStorage.getItem("errorConnect")))
        }
    }, [])

    console.log(errorObject)

    return(
        <div className="league">
            <div className="container">
                <div className="league__error">
                    {errorObject ?
                    <>
                        <div className="error__header">
                            500
                        </div>
                        <div className="error__message">
                            <span>Что-то пошло не так</span>
                            <p>Ошибка соединения с сервером</p>
                            <Link to="/">
                                <button onClick={() => localStorage.removeItem("errorConnect")}>Назад</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="error__header">
                            404
                        </div>
                        <div className="error__message">
                            <span>Что-то пошло не так</span>
                            <p>Вы попали на несуществующую страницу.</p>
                            <Link to="/">
                                <button onClick={() => localStorage.removeItem("errorConnect")}>Назад</button>
                            </Link>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage