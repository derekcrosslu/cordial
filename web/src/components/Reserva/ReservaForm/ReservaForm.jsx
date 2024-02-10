import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ReservaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.reserva?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nombre"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nombre
        </Label>

        <TextField
          name="nombre"
          defaultValue={props.reserva?.nombre}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nombre" className="rw-field-error" />

        <Label
          name="area"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Area
        </Label>

        <TextField
          name="area"
          defaultValue={props.reserva?.area}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="area" className="rw-field-error" />

        <Label
          name="invitados"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Invitados
        </Label>

        <NumberField
          name="invitados"
          defaultValue={props.reserva?.invitados}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="invitados" className="rw-field-error" />

        {/* <Label
          name="numeracion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Numeracion
        </Label> */}

        {/* <NumberField
          name="numeracion"
          defaultValue={props.reserva?.numeracion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numeracion" className="rw-field-error" /> */}

        <Label
          name="mesa"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mesa
        </Label>

        <NumberField
          name="mesa"
          defaultValue={props.reserva?.mesa}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mesa" className="rw-field-error" />

        <Label
          name="fecha"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fecha
        </Label>

        <DatetimeLocalField
          name="fecha"
          defaultValue={formatDatetime(props.reserva?.fecha)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fecha" className="rw-field-error" />

        <Label
          name="telefono"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Telefono
        </Label>

        <TextField
          name="telefono"
          defaultValue={props.reserva?.telefono}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="telefono" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.reserva?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ReservaForm
