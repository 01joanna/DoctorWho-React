import DoctorsData from '../../../../public/assets/doctors.json'
import Image from 'next/image'
import ButtonComponent from '../GeneralButton/GeneralButton';

const DoctorsCard = () => {
    return (
    <section>
        <ul>
        {DoctorsData.doctors.map((doctor) => (
                <div key={doctor.id} className="doctors__cards-container">
                    <Image 
                    src={`${doctor.image}`}
                    alt={`'Imagen del ${doctor.doctor}'`}
                    width={314}
                    height={459}
                    className='doctor__image'
                    />

                    <div className='doctors__card-text'>
                        <h2>{doctor.doctor}</h2>
                        <p>{doctor.actor}</p>
                        <p>{doctor.screen_time}</p>
                    </div>
                    <ButtonComponent to={'www.doctorwho.com/tv'} text={'Ver más'} className={`${'doctors__btn'}`} />
                </div>
        ))}
        </ul>
    </section>
    )
}

export default DoctorsCard;