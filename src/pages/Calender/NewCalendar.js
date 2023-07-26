import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './NewCalendar.css'
import axios from 'axios';
import { red } from '@mui/material/colors';
function FullCalendarApp() {
    const [weather, setWeather] = useState({
        temp: '',
        icon: ''
    })
    const [time, setTime] = useState(new Date())
    const temp = Math.round((1.8 * (weather.temp - 273) + 32) * 10) / 10
    const API_KEY = 'aad732ad4eaab3664f5ab09dc84aa55c'
    const ref = useRef()
    const [title, setTitle] = useState('')
    const cityname = 'San Francisco'

    const events = [
        {
            id: 1,
            title: 'Visit Course',
            start: '2023-04-14T10:00:00',
            end: '2022-04-14T12:00:00',
            backgroundColor: ' rgba(28, 216, 201, 0.1)'
            , textColor: '#1CD8C9',
            color: 'transparent'

        },
        {
            id: 2,
            title: 'Design New Pages',
            start: '2023-04-01T13:00:00',
            end: '2022-04-01T18:00:00',
            borderColor: "transparent",
            backgroundColor: "rgba(254, 163, 30, 0.1)",
            textColor: 'rgb(254, 163, 30)',
            //display: "background",
        },
        {
            id: 3,
            title: 'event 3',
            start: '2022-06-17',
            end: '2022-06-22',
            backgroundColor: '#EEE7F2',
            color: 'transparent',
            textColor: '#550B7C'
            // fontColor: 'red'

        },


    ];
    function refreshClock() {
        setTime(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    useEffect(async () => {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`)
        if (res) {
            console.log(res.data);
            setWeather({ ...weather, temp: res.data.main.temp, icon: res.data.weather[0].icon })
        }

        // setTitle(ref.current._calendarApi.currentDataManager.data.viewTitle)
        // console.log(ref.current._calendarApi.currentDataManager.data.viewTitle);


    }, [])

    return (
        <div className="App">
            <div className="d-flex align-items-start justify-content-end weather mt-2">
                <div className="d-flex flex-column align-items-end">
                    <h6 className="mb-0 font-weight-bold" style={{ fontWeight: '900' }}>{time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h6>
                    <p className="text-muted">{temp} F in {cityname}</p>
                </div>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" srcset="" />
            </div>
            <h1 className='cal_title'>{ref.current?._calendarApi && ref.current._calendarApi.currentDataManager.data.viewTitle}</h1>
            <FullCalendar
                ref={ref}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'dayGridMonth,timeGridWeek,timeGridDay',
                    // center: 'title'
                }}
                // customButtons={{
                //     new: {
                //         text: 'new',
                //         click: () => alert('new event'),
                //     },
                // }}
                allDaySlot={false}
                eventTimeFormat={
                    {
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: 'short'
                    }
                }
                eventDisplay='block'
                events={events}
            // dateClick={(e) => alert(e.dateStr)}
            // eventClick={(e) => console.log(e.event.id)}
            />
        </div>
    );
}
export default FullCalendarApp;