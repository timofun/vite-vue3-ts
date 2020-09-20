import { defineComponent } from 'vue'

interface InputProps {
  value: string;
}

const Input = defineComponent({
  setup(props: InputProps, { emit }) {
    const handleChange = (event: KeyboardEvent) => {
      const { value } = event.target as HTMLInputElement
      emit('onChange', value)
      console.log('event', event, value)
    }
    return () => (
      // @ts-ignore
      <input value={props.value} onInput={(e) => handleChange(e as KeyboardEvent)} />
    )
  }
})

export default Input
