import { FedbackOptions } from "./FeedbackOptions"
export const Section = ({ title }) => {

    title = "Please Leave feedback"
    return (
        <div>
            <h2>{ title}</h2>
            <FedbackOptions/>
        </div>
    )
}