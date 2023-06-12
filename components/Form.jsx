import React from 'react'
import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <div className='form-container'>
      <div className='top-form'>
        <h1>
          {type} uma Postagem
        </h1>
        <p>
          Aqui é possível {type} e compartilhar mensagens de apoio ou ajuda, conte com o apoio de outras pessoas para superar as adversidades.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <textarea name="text" id="text" value={post.text} onChange={(e) => setPost({ ...post, text: e.target.value})} placeholder='Escreva uma mensagem' className='form-textarea' required></textarea>
        </label>

        <div className='form-actions'>
          <Link href="/" className='cancel-form'>
            Cancelar
          </Link>

          <button type="submit" className='send-form' disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>

    </div>
  )
}

export default Form