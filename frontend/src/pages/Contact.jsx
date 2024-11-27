const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Liên hệ với chúng tôi</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
        Bạn gặp vấn đề kỹ thuật? Muốn gửi phản hồi về tính năng? Hãy cho chúng tôi biết.</p>
        <form action='#' className='space-y-8'>
        <div>
          <label htmlFor='email' className='form__label'>
             Email
          </label>
          <input 
            type='email'
            id='email'
            placeholder='example@gmail.com'
            className='form__input mt-1'
          />
        </div>
        <div>
          <label htmlFor='subject' className='form__label'>
            Vấn đề
          </label>
          <input 
            type='text'
            id='subject'
            placeholder='Chúng tôi có thể giúp gì cho bạn?'
            className='form__input mt-1'
          />
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor='message' className='form__label'>
            Ý kiến phản hồi
          </label>
          <textarea 
            rows='6'
            type='email'
            id='message'
            placeholder=''
            className='form__input mt-1'
          />
        </div>
        <button type='submit' className='btn rounded sm:w-fit'>Gửi</button>
        </form>
      </div>
    </section>
  )
}

export default Contact