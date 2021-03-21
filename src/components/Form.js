import { Form, Button, Input } from './formstyle';
import React from 'react';
import { navigate } from 'gatsby-link';

const ContactForm = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Form
      name="contact-form"
      method="post"
      action="/success/" // does it need trailing slash?
      // do i need id='form'?
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Netlify: The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      {/* Me: Looks like end of hidden */}

      <div>
        <label htmlFor="name">
          Name:
          <Input id="name" type="text" name="name" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <Input
            id="email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="msg">
          Message:
          <Input
            as="textarea"
            name="message"
            id="msg"
            rows="5"
            onChange={handleChange}
            style={{ resize: 'vertical' }}
          ></Input>
        </label>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default ContactForm;
