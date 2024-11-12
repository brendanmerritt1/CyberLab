export default function Visualization() {
    return (
      <div className="learning-plan w-[64.5rem] tracking-wider">
        <div
          className="module module-left flex flex-col items-center"
          style={{ gridRow: 1 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Splunk Forwarder Installation (Lab)</span>
            <span className="p-5 text-yellow-400">10 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 2 }}></div>
        <div class="curved-connector-tr" style={{ gridRow: 2 }}></div>
        <div class="curved-connector-bl" style={{ gridRow: 2 }}></div>
        <div class="curved-connector-tl" style={{ gridRow: 2 }}></div>
        <div
          className="module module-right flex flex-col items-center"
          style={{ gridRow: 3 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Introduction to Splunk (Lab)</span>
            <span className="p-5 text-yellow-400">15 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 4 }}></div>
        <div class="curved-connector-br" style={{ gridRow: 4 }}></div>
        <div class="curved-connector-tr" style={{ gridRow: 6 }}></div>
        <div
          className="module module-left flex flex-col items-center"
          style={{ gridRow: 5 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Splunk & Visualization Course (Udemy)</span>
            <span className="p-5 text-yellow-400">10 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 6 }}></div>
        <div class="curved-connector-bl" style={{ gridRow: 6 }}></div>
        <div class="curved-connector-tl" style={{ gridRow: 6 }}></div>
        <div
          className="module module-right flex flex-col items-center"
          style={{ gridRow: 7 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Quiz: Visualization Tool Features</span>
            <span className="p-5 text-yellow-400">10 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 8 }}></div>
        <div class="curved-connector-br" style={{ gridRow: 8 }}></div>
        <div
          className="module module-left flex flex-col items-center"
          style={{ gridRow: 9 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Advanced Incident Response (Lab)</span>
            <span className="p-5 text-yellow-400">25 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 10 }}></div>
        <div class="curved-connector-bl" style={{ gridRow: 10 }}></div>
        <div class="curved-connector-tr" style={{ gridRow: 10 }}></div>
        <div
          className="module module-right flex flex-col items-center"
          style={{ gridRow: 11 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Quiz: Log Analysis & Threat Detection</span>
            <span className="p-5 text-yellow-400">10 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 12 }}></div>
        <div class="curved-connector-br" style={{ gridRow: 12 }}></div>
        <div class="curved-connector-tl" style={{ gridRow: 10 }}></div>
        <div
          className="module module-left flex flex-col items-center"
          style={{ gridRow: 13 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Final Project: Dashboard Story</span>
            <span className="p-5 text-yellow-400">30 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
        <div className="line" style={{ gridRow: 14 }}></div>
        <div class="curved-connector-bl" style={{ gridRow: 14 }}></div>
        <div class="curved-connector-tr" style={{ gridRow: 14 }}></div>
        <div
          className="module module-right flex flex-col items-center"
          style={{ gridRow: 15 }}
        >
          <div className="flex h-[6rem] w-[28rem] flex-row items-center rounded-2xl bg-[#505d96] text-center">
            <span className="p-5">Track Complete</span>
            <span className="p-5 text-yellow-400">140 Points</span>
            <span className="mr-5 cursor-pointer rounded-2xl border-2 border-green-400 p-2 text-green-400 hover:bg-gray-600">
              Mark Completed
            </span>
          </div>
        </div>
      </div>
    );
  }
  