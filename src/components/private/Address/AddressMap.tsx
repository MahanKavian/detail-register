import { Dispatch, useEffect, useState } from "react";
import rightArrow from "../../../assets/icons/RightArrow";
import Map, { GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markerIcon from "../../../assets/icons/Marker";
import { UseFormSetValue } from "react-hook-form";
import { FormValuesInterface } from "../../../pages/Address";
interface Props {
    setIsNextStep: Dispatch<boolean>;
    setValue: UseFormSetValue<FormValuesInterface>;
}

const AddressMap = ({ setIsNextStep, setValue }: Props) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

    const mapLocationHandler = (event: any) => {
        const { lng, lat } = event.lngLat;
        setSelectedLocation({ lat, lng });
    };

    useEffect(() => {
        if (selectedLocation?.lat && selectedLocation.lng) {
            setValue("lat" as keyof FormValuesInterface, selectedLocation?.lat as number);
            setValue("long" as keyof FormValuesInterface, selectedLocation?.lng as number);
        }
    }, [selectedLocation])


    return (
        <div className="w-full relative">
            <div className="w-full lg:hidden flex z-30 items-center gap-3 p-3 absolute top-0 bg-transparentWhite text-text-100">
                <i className={"hover:cursor-pointer"} onClick={() => { setIsNextStep(false) }}>{rightArrow}</i>
                <div className={" text-center"}>
                    موقعیت
                </div>
            </div>
            <div className={"w-full lg:w-4/6 h-[90vh] lg:mx-auto md:h-[80vh] lg:h-[60vh] overflow-hidden flex flex-col items-center justify-center lg:mt-12"}>
                <div className={"hidden lg:flex w-full items-center gap-3 mb-5"}>
                    <i className={"hover:cursor-pointer"} onClick={() => { setIsNextStep(false) }}>{rightArrow}</i>
                    <span>انتخاب آدرس</span>
                </div>
                <div className={"hidden lg:flex w-full items-center gap-3 bg-silver-100 text-sm p-2"}>
                    موقعیت مورد نظر خود را روی نقشه مشخص کنید
                </div>
                <Map
                    mapboxAccessToken="pk.eyJ1Ijoidm8yZGV2ZWxvcCIsImEiOiJjbHZkbTRxcngwMGFuMnFuanhkZ2RxNnc0In0.vwZO9MHY6guvK4Sw5o8vcg"
                    initialViewState={{
                        longitude: 51.3890,
                        latitude: 35.6892,
                        zoom: 14
                    }}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onClick={mapLocationHandler}
                >
                    <div style={{ position: "absolute", top: 90, left: 10 }}>
                        <GeolocateControl
                            positionOptions={{ enableHighAccuracy: true }}
                            trackUserLocation={true}
                            style={{ backgroundColor: "#FFF", borderRadius: 2 }}
                        />
                    </div>
                    {selectedLocation && (
                        <Marker longitude={selectedLocation.lng} latitude={selectedLocation.lat} anchor="bottom">
                            <i>{markerIcon}</i>
                        </Marker>
                    )}
                </Map>
            </div>
        </div>
    );
};

export default AddressMap;