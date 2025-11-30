import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";


type FormInputProps = {
    label: string;
    name: string;
    type: string;
    defaultValue: string | undefined;
    placeholder: string;
}

const FormInput = ({label, name, type, defaultValue, placeholder}: FormInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <Label className='capitalize text-xl' htmlFor={name}>
                {label || name}
            </Label>

            <Input id={name} type={type}
                   name={name}
                   defaultValue={defaultValue ? defaultValue : ""}
                   placeholder={placeholder}></Input>
        </div>
    )

}
export default FormInput
