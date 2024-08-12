import { Link } from "lucide-react";
import Image from "next/image";


export default function Projects() {
    return (
    <div className="flex flex-row m-4">
        <div className="flex flex-col space-y-3 m-3">
            <Image src="/sentiment.jpg" alt="Sentiment" width={125} height={125} />
            {/* <div className="h-[125px] w-[250px] rounded-xl"> </div> */}
            <div className="space-y-2">
                <a href="https://github.com/gummireddysandeepreddy/Project---Sentiment-Classifier-Foundations-of-Python-Programming">Sentiment Classifier</a>
                <p className="h-4 w-[200px]">Developed a Python script to classify and analyze sentiment in Twitter posts; improved text analytics efficiency by 50%.</p>
            </div>
        </div>
        <div className="flex flex-col space-y-3 m-3">
        <Image src="/wqp.png" alt="wqp" width={125} height={200} />
          {/* <div className="h-[125px] w-[250px] rounded-xl"> </div> */}
          <div className="space-y-2">
            <a href="https://github.com/gummireddysandeepreddy/Water-Quality-Prediction-using-ANN-Model">Water Quality Prediction using ANN Model</a>
            <p className="h-4 w-[200px]">Designed and deployed a scalable RESTful API using Flask, achieving a 30% improvement in data retrieval speed.</p>
          </div>
        </div>
    </div>
    )
}