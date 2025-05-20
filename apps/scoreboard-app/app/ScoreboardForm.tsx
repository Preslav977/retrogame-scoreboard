import { Formik } from 'formik';

import { ScoreBoardInterface } from './ScoreBoardInterface';

export interface ScoreboardFormProps {
  formData: ScoreBoardInterface;
  setFormData: (formData: ScoreBoardInterface) => void;
}

export const ScoreboardForm = ({
  formData,
  setFormData,
}: ScoreboardFormProps) => (
  <Formik
    initialValues={{ playerName: '', gameName: '', score: 0 }}
    validate={(values) => {
      const errors = {};
      if (!values.playerName) {
        errors.playerName = 'Must not be empty';
      }

      if (!values.gameName) {
        errors.gameName = 'Must not be empty';
      }

      if (values.score === 0) {
        errors.score = 'Must be greater than 0';
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        const obj = {
          ...formData,
          playerName: values.playerName,

          gameName: values.gameName,

          score: values.score,
        };

        setFormData(obj);

        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playerName"
          onChange={handleChange}
          value={values.playerName}
        />
        {errors.playerName && touched.playerName && errors.playerName}
        <input
          type="text"
          name="gameName"
          onChange={handleChange}
          value={values.gameName}
        />
        {errors.gameName && touched.gameName && errors.gameName}
        <input
          type="number"
          name="score"
          min={0}
          onChange={handleChange}
          value={values.score}
        />
        {errors.score && touched.score && errors.score}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  </Formik>
);
