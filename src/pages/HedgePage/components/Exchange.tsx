import { Input } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const updateTimeoutSeconds = 10;

export const Exchange = () => {
  const [lastUpdated, setLastUpdated] = useState<string>();
  const [currencyRate, setCurrencyRate] = useState<number>(0);
  const [usdValue, setUsdValue] = useState<number>();
  const { t } = useTranslation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const runLastUpdated = () => {
      setLastUpdated(new Date().toLocaleTimeString());
      setCurrencyRate(1 + +(Math.random() / 10).toFixed(4));
      timeoutId = setTimeout(runLastUpdated, updateTimeoutSeconds * 1000);
    };
    runLastUpdated();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="pl-5 text-xs flex items-center gap-3 pt-3">
        <CountdownCircleTimer
          key={lastUpdated}
          isPlaying
          duration={updateTimeoutSeconds}
          colors={"#8774e1"}
          trailColor={"#CCCCCC"}
          size={40}
          strokeWidth={2}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <span>
          {t("last_updated")}: {lastUpdated}
        </span>
      </div>
      <Input
        header={
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 512 512"
            >
              <mask id="circleFlagsEuropeanUnion0">
                <circle cx={256} cy={256} r={256} fill="#fff"></circle>
              </mask>
              <g mask="url(#circleFlagsEuropeanUnion0)">
                <path fill="#0052b4" d="M0 0h512v512H0z"></path>
                <path
                  fill="#ffda44"
                  d="m256 100.2l8.3 25.5H291l-21.7 15.7l8.3 25.6l-21.7-15.8l-21.7 15.8l8.3-25.6l-21.7-15.7h26.8zm-110.2 45.6l24 12.2l18.9-19l-4.2 26.5l23.9 12.2l-26.5 4.2l-4.2 26.5l-12.2-24l-26.5 4.3l19-19zM100.2 256l25.5-8.3V221l15.7 21.7l25.6-8.3l-15.8 21.7l15.8 21.7l-25.6-8.3l-15.7 21.7v-26.8zm45.6 110.2l12.2-24l-19-18.9l26.5 4.2l12.2-23.9l4.2 26.5l26.5 4.2l-24 12.2l4.3 26.5l-19-19zM256 411.8l-8.3-25.5H221l21.7-15.7l-8.3-25.6l21.7 15.8l21.7-15.8l-8.3 25.6l21.7 15.7h-26.8zm110.2-45.6l-24-12.2l-18.9 19l4.2-26.5l-23.9-12.2l26.5-4.2l4.2-26.5l12.2 24l26.5-4.3l-19 19zM411.8 256l-25.5 8.3V291l-15.7-21.7l-25.6 8.3l15.8-21.7l-15.8-21.7l25.6 8.3l15.7-21.7v26.8zm-45.6-110.2l-12.2 24l19 18.9l-26.5-4.2l-12.2 23.9l-4.2-26.5l-26.5-4.2l24-12.2l-4.3-26.5l19 19z"
                ></path>
              </g>
            </svg>
            EUR
          </div>
        }
        className="grow"
        onChange={(event) => setUsdValue(+event.target.value * currencyRate)}
      />
      <Input
        header={
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
            >
              <path fill="#ed4c5c" d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6z"></path>
              <path
                fill="#fff"
                d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32z"
              ></path>
              <path
                fill="#ed4c5c"
                d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32z"
              ></path>
              <path
                fill="#fff"
                d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32z"
              ></path>
              <path
                fill="#ed4c5c"
                d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32z"
              ></path>
              <path
                fill="#fff"
                d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32z"
              ></path>
              <path
                fill="#ed4c5c"
                d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3s0-1.6-.1-2.3"
              ></path>
              <path
                fill="#fff"
                d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.3 3.1.7 4.6"
              ></path>
              <path
                fill="#ed4c5c"
                d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6"
              ></path>
              <path
                fill="#fff"
                d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6"
              ></path>
              <path
                fill="#ed4c5c"
                d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6"
              ></path>
              <path
                fill="#fff"
                d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6"
              ></path>
              <path
                fill="#ed4c5c"
                d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7"
              ></path>
              <path
                fill="#428bc1"
                d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6"
              ></path>
              <path
                fill="#fff"
                d="m25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm20 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm12 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm2.8-14l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9zm-8 12l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6z"
              ></path>
            </svg>
            USD
          </div>
        }
        after={
          <span className="text-xs whitespace-nowrap">
            1 EUR = {currencyRate} USD
          </span>
        }
        className="grow"
        value={usdValue?.toFixed(2) || ""}
        readOnly
      />
    </div>
  );
};
