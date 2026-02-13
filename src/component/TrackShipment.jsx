
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const TrackShipment = () => {

  const [trackingId, setTrackingId] =
    useState("");

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleTrack = async () => {

    if (!trackingId.trim()) {

      alert("Please enter Tracking ID");
      return;

    }

    try {

      setLoading(true);
      setError("");
      setData(null);

      const res = await fetch(
        `${API_BASE}/track/${trackingId}`
      );

      const result = await res.json();

      setLoading(false);

      if (!result.success) {

        setError(result.message);
        return;

      }

      setData(result.consignment);

    } catch (err) {

      setLoading(false);

      setError(
        "Failed to fetch tracking data"
      );

    }

  };

  return (

    <section className="relative z-30 px-4 sm:px-6">



      <div className="
        max-w-4xl mx-auto
        bg-white rounded-2xl
        shadow-[0_20px_50px_-15px_#b21f2d40]
        p-5 sm:p-6 md:p-8
      ">

        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#b21f2d]">
          Track Your Shipment
        </h2>

        {/* SEARCH */}

        <div className="flex flex-col md:flex-row gap-4">

          <div className="
            flex items-center w-full
            border rounded-lg
            px-4 py-3
            bg-[#b21f2d15]
          ">

            <FiSearch
              className="text-[#b21f2d] mr-3"
              size={18}
            />

            <input
              type="text"
              value={trackingId}
              onChange={(e) =>
                setTrackingId(e.target.value)
              }
              placeholder="Track Your Shipment"
              className="
                w-full bg-transparent outline-none
                text-[#140826]
              "
            />

          </div>

          <button
            onClick={handleTrack}
            className="
              bg-[#b21f2d]
              hover:bg-[#9b1b26]
              text-white font-semibold
              px-10 py-3
              rounded-lg
            "
          >

            {loading
              ? "Tracking..."
              : "Track"}

          </button>

        </div>


        {/* ERROR */}

        {error && (

          <div className="
            text-red-600
            mt-6
            font-semibold
          ">
            {error}
          </div>

        )}


        {/* RESULT */}

        {data && (

          <div className="
            mt-8
            border-t
            pt-6
            space-y-3
          ">

            <h3 className="
              text-xl
              font-bold
              text-[#b21f2d]
            ">
              Shipment Details
            </h3>

            <p>
              <strong>Tracking ID:</strong>
              {" "}
              {data.trackingId}
            </p>

            <p>
              <strong>Customer:</strong>
              {" "}
              {data.customerName}
            </p>

            <p>
              <strong>Phone:</strong>
              {" "}
              {data.phone}
            </p>

            <p>
              <strong>Origin:</strong>
              {" "}
              {data.origin}
            </p>

            <p>
              <strong>Destination:</strong>
              {" "}
              {data.destination}
            </p>

            <p>
              <strong>Courier:</strong>
              {" "}
              {data.courierCompany}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}
              <span className="
                text-green-600
                font-bold
              ">
                {data.status}
              </span>
            </p>

            <p>
              <strong>Shipment Date:</strong>
              {" "}
              {new Date(
                data.shipmentDate
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>Expected Delivery:</strong>
              {" "}
              {new Date(
                data.expectedDeliveryDate
              ).toLocaleDateString()}
            </p>

            <a
              href={data.courierLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-4
                bg-[#b21f2d]
                text-white
                px-6 py-3
                rounded-lg
              "
            >
              Track on Courier Website
            </a>

          </div>

        )}

      </div>

    </section>

  );

};

export default TrackShipment;
