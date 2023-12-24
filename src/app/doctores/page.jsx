import DoctorsCard from './DoctorsCard';
import './doctors.css'
import { lato, montserrat } from '../fonts'

export default function DoctorsPage() {
    return (
        <main className="doctors__page">
            <h1 className={lato.className}>Doctores</h1>
            <DoctorsCard />
        </main>
    )
}
