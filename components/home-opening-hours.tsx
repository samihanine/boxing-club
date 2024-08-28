import { cn } from "@/lib/utils";
import React from "react";

type ScheduleEntry = {
  ageRange: "ADULT" | "ADO" | "CHILDREN";
  boxeType: "ENGLISH" | "THAI" | "FREE";
  day: string;
  startHour: number;
  endHour: number;
};

const schedules: ScheduleEntry[] = [
  {
    ageRange: "ADULT",
    boxeType: "ENGLISH",
    day: "Tuesday",
    startHour: 18,
    endHour: 20,
  },
  {
    ageRange: "ADULT",
    boxeType: "ENGLISH",
    day: "Thursday",
    startHour: 18,
    endHour: 20,
  },
  {
    ageRange: "ADULT",
    boxeType: "ENGLISH",
    day: "Saturday",
    startHour: 14,
    endHour: 16,
  },
  {
    ageRange: "ADO",
    boxeType: "ENGLISH",
    day: "Wednesday",
    startHour: 15,
    endHour: 16,
  },
  {
    ageRange: "ADO",
    boxeType: "ENGLISH",
    day: "Saturday",
    startHour: 15,
    endHour: 16,
  },
  {
    ageRange: "CHILDREN",
    boxeType: "ENGLISH",
    day: "Wednesday",
    startHour: 14,
    endHour: 15,
  },
  {
    ageRange: "CHILDREN",
    boxeType: "ENGLISH",
    day: "Saturday",
    startHour: 15,
    endHour: 16,
  },
  {
    ageRange: "ADULT",
    boxeType: "THAI",
    day: "Tuesday",
    startHour: 18,
    endHour: 20,
  },
  {
    ageRange: "ADULT",
    boxeType: "THAI",
    day: "Wednesday",
    startHour: 18,
    endHour: 20,
  },
  {
    ageRange: "ADULT",
    boxeType: "THAI",
    day: "Saturday",
    startHour: 14,
    endHour: 16,
  },
  {
    ageRange: "ADULT",
    boxeType: "FREE",
    day: "Saturday",
    startHour: 14,
    endHour: 16,
  },
  {
    ageRange: "ADULT",
    boxeType: "FREE",
    day: "Wednesday",
    startHour: 14,
    endHour: 16,
  },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const HomeOpeningHours: React.FC = () => {
  return (
    <section>
      <div className="py-12 md:py-20 bg-background">
        <div
          data-aos="zoom-in"
          className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-10 flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Horaires des séances
          </h2>
          <p className="text-base text-muted-foreground text-center max-w-3xl w-full">
            Nous vous accueillons du mardi au samedi pour des séances de boxe
            anglaise et thaïlandaise. Nous proposons des séances pour les
            adultes et les adolescents, ainsi que pour les enfants.
          </p>
          <div className="flex flex-col sm:grid sm:grid-cols-7 gap-4 mt-5 w-full">
            {daysOfWeek.map((day) => (
              <div key={day} className="border border-foreground p-2 w-full">
                <h2 className="font-bold text-lg text-center">
                  {day === "Monday" && <span>Lundi</span>}
                  {day === "Tuesday" && <span>Mardi</span>}
                  {day === "Wednesday" && <span>Mercredi</span>}
                  {day === "Thursday" && <span>Jeudi</span>}
                  {day === "Friday" && <span>Vendredi</span>}
                  {day === "Saturday" && <span>Samedi</span>}
                  {day === "Sunday" && <span>Dimanche</span>}
                </h2>
                {schedules
                  .filter((schedule) => schedule.day === day)
                  .sort((a, b) => a.startHour - b.startHour)
                  .map((schedule, index) => (
                    <div
                      key={index}
                      className={cn(
                        "mt-2 p-3 rounded-md shadow-sm",
                        schedule.boxeType === "ENGLISH" &&
                          "bg-[#FBDC6A] text-primary",
                        schedule.boxeType === "THAI" &&
                          "bg-secondary text-background",
                        schedule.boxeType === "FREE" &&
                          "bg-primary text-background",
                      )}
                    >
                      <p className="text-sm">
                        {schedule.ageRange === "ADULT" && <span>Adultes</span>}

                        {schedule.ageRange === "ADO" && (
                          <span>Adolescents</span>
                        )}

                        {schedule.ageRange === "CHILDREN" && (
                          <span>Enfants</span>
                        )}
                      </p>

                      <p className="font-medium text-lg mb-2">
                        {schedule.boxeType === "ENGLISH" && (
                          <span>Anglaise</span>
                        )}
                        {schedule.boxeType === "THAI" && (
                          <span>Thaïlandaise</span>
                        )}
                        {schedule.boxeType === "FREE" && (
                          <span>Anglaise et Thaï (libre)</span>
                        )}
                      </p>

                      <p className="">{`${schedule.startHour}:00 - ${schedule.endHour}:00`}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div className="w-full flex gap-10 items-center justify-center flex-wrap">
            <div className="flex items-center gap-3">
              <div className="aspect-square bg-primary w-10 h-10"></div>
              <p className="text-muted-foreground">Boxe thaïlandaise</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="aspect-square bg-secondary w-10 h-10"></div>
              <p className="text-muted-foreground">Boxe anglaise</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="aspect-square bg-[#FBDC6A] w-10 h-10"></div>
              <p className="text-muted-foreground">
                Boxe anglaise et thaïlandaise (libre)
              </p>
            </div>

            <p className="font-medium">
              Enfant :{" "}
              <span className="text-muted-foreground font-normal">
                6 à 12 ans
              </span>
            </p>
            <p className="font-medium">
              Adolescent :{" "}
              <span className="text-muted-foreground font-normal">
                12 à 16 ans
              </span>
            </p>
            <p className="font-medium">
              Adulte :{" "}
              <span className="text-muted-foreground font-normal">
                16 ans et plus
              </span>
            </p>
          </div>

          <div className="w-full flex gap-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeOpeningHours;
