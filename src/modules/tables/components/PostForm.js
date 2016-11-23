import React, {PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import {FormattedMessage} from 'react-intl';

const PostForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="postTitle" className="pt-label">
        <FormattedMessage
          id={'table.postTitle'}
          description={'Post title'}
          defaultMessage={'Post title'}
        />
        <Field name="postTitle" className="pt-input" component="input" type="text"/>
      </label>
    </div>
    <div>
      <button type="submit" className="pt-button pt-icon-add">
        <FormattedMessage
          id={'table.postSubmit'}
          description={'Submit post'}
          defaultMessage={'Submit'}
        />
      </button>
    </div>
  </form>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(PostForm);
