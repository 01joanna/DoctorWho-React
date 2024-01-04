import DoctorsCard from '../components/DoctorsCard/DoctorsCard';
import '../components/DoctorsCard/doctorscard.css'
import './doctors.css'
import { lato } from '../fonts'

export default function DoctorsPage() {
    return (
        <main className="doctors__page">
            <h1 className={`${lato.className} ${'doctors__title'}`}>Doctores</h1>
            <DoctorsCard />
        </main>
    )
}
