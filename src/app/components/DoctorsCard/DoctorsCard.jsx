import DoctorsData from '../../../../public/assets/doctors.json'
import Image from 'next/image'

const DoctorsCard = () => {
    return (
    <section className='doctors__cards-container'>
        <ul>
        {DoctorsData.doctors.map((doctor) => (
                <li key={doctor.id} className="doctors__card">
                    <Image 
                    src={`${doctor.image}`}
                    alt={`'Imagen del ${doctor.doctor}'`}
                    width={314}
                    height={459}
                    />
                    <div className='doctors__card-text'>
                        <h2>{doctor.doctor}</h2>
                        <h3>{doctor.actor}</h3>
                        <h3>{doctor.screentime}</h3>
                    </div>
                </li>
        ))}
        </ul>
    </section>
    )
}

export default DoctorsCard;