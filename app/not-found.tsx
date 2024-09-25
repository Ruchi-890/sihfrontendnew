import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="text-center justify-center ">
            <h1>Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Button><Link href={"/"}>Go to home</Link></Button>
        </div>
    )
}