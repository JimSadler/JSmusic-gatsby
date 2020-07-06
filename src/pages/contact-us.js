import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import RichText from '../components/RichText';


export const query = graphql`
   {
  prismic {
    allContact_pages {
      edges {
        node {
          form_title
          form_description
          form_fields {
            field_name
            field_type
            required
          }
        }
      }
    }
  }
}

`
const ContentWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px;
`
const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: solid 1px #eee;
    width: 100%;
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: solid 1px #eee;
    width: 100%;
    resize: none;
  }
`
const Button = styled.button`
  border-radius: 4px;
  background: #66feff;
  color: #333;
  padding: 4px 8px;
  box-shadow: none;
`
const ContactUs = (props) => {
  console.log(props);
  return (
    <Layout>
      <ContentWrapper>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title} />
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_description} />
        <Form
          name="contact-us"
          method="POST"
          data-netlify="true"
          action="/contact-success"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={i}>
                  <textarea
                    placeholder={field.field_name}
                    name={field.field_name}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <input
                    name={field.field_name}
                    placeholder={field.field_name}
                    type={field.field_type}
                    required={field.required === "Yes"}
                  />
                </div>
              )
            }

          })}
          <Button type="submit">
            Submit
        </Button>
        </Form>
      </ContentWrapper>
    </Layout >
  )
}
export default ContactUs