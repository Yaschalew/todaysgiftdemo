import { Button } from "antd";
import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <p>page not found</p>
            <Button type="primary" onClick={handleBack}>Go Back</Button>
        </div>
    )
}

export default PageNotFound
