import type {ReactNode} from "react";
import {Form, Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import FormInput from "@/components/FormInput.tsx";


const Filters = ({term, mode}: { term: string | undefined; mode: string }): ReactNode => {
    return (
        <Form className="my-6 py-2 flex flex-col gap-2">
            <FormInput type="search" label="Search for" name="term" defaultValue={term}
                       placeholder="'m45 'neutron star 'starship"/>
            <div className="self-end flex gap-2">
                <Button type='submit' size="lg">Search</Button>
                <Button type='button' size="lg" variant="outline">
                    <Link to={mode === "news" ? "/news" : "/hubble"}>Reset</Link>
                </Button>
            </div>
        </Form>
    )
}
export default Filters