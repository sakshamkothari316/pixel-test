import { useCallback, useEffect, useState } from "react";
import styles from "../styles/User.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TRootState } from "../../../redux/store";
import { getUserDetail } from "../redux/authAction";
import { useSearchParams } from "react-router-dom";
import { IUser } from "../redux/authSlice";

const User = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [sortOrder, setSortOrder] = useState<"asc" | "des">("asc");
  const [sortField, setSortField] = useState("");
  const [sortedUsers, setSortedUsers] = useState<Array<IUser> | []>([]);

  const user = useSelector((state: TRootState) => {
    return state.auth.user;
  }, shallowEqual);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const handleSort = useCallback(
    (
      str:
        | "city"
        | "latitude"
        | "longitude"
        | "name"
        | "number"
        | "postCode"
        | "state"
        | "country"
    ) => {
      setSortOrder((prev) => {
        return prev === "asc" ? "des" : "asc";
      });
      setSortField(() => {
        return str;
      });
    },
    []
  );

  // function to handle the sorting as we have limited data fetched from backend
  useEffect(() => {
    if (sortOrder || sortField) {
      if (sortField === "latitude" || sortField === "longitude") {
        setSortedUsers((prev) => {
          const sort = [...prev].sort((a, b) => {
            if (sortOrder === "asc") {
              return Number(b[sortField]) - Number(a[sortField]);
            } else {
              return Number(a[sortField]) - Number(b[sortField]);
            }
          });
          return sort;
        });
      } else {
        setSortedUsers((prev) => {
          const sort = [...prev].sort((a, b) => {
            let field = sortField as keyof IUser;
            const strA = (a[field] || "").toString().toLowerCase();
            const strB = (b[field] || "").toString().toLowerCase();
            if (sortOrder === "asc") {
              return strA.localeCompare(strB);
            } else {
              return strB.localeCompare(strA);
            }
          });
          return sort;
        });
      }
    }
  }, [sortOrder, sortField]);

  useEffect(() => {
    setSortedUsers([...user].sort() ?? []);
  }, [user]);

  // performing search from backend
  useEffect(() => {
    if (!searchQuery) {
      dispatch(getUserDetail());
      return;
    }
    const timer = setTimeout(() => {
      dispatch(getUserDetail(`search=${searchQuery}`));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className={styles.main_container}>
      <p className={styles.user__title}>User List</p>
      <p className={styles.user__sub_title}>Random User List</p>
      <input
        type="search"
        placeholder="Search ..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className={styles.user__table}>
        <table>
          <thead>
            <tr>
              <th
                onClick={() => {
                  handleSort("city");
                }}
              >
                City
              </th>
              <th
                onClick={() => {
                  handleSort("state");
                }}
              >
                State
              </th>
              <th
                onClick={() => {
                  handleSort("country");
                }}
              >
                Country
              </th>
              <th
                onClick={() => {
                  handleSort("postCode");
                }}
              >
                Postcode
              </th>
              <th
                onClick={() => {
                  handleSort("number");
                }}
              >
                Number
              </th>
              <th
                onClick={() => {
                  handleSort("name");
                }}
              >
                Name
              </th>
              <th
                onClick={() => {
                  handleSort("latitude");
                }}
              >
                Latitude
              </th>
              <th
                onClick={() => {
                  handleSort("longitude");
                }}
              >
                Longitude
              </th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(sortedUsers) &&
              sortedUsers.length > 0 &&
              sortedUsers.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{data.city ?? ""}</td>
                    <td>{data.state ?? ""}</td>
                    <td>{data.country ?? ""}</td>
                    <td>{data.postCode ?? ""}</td>
                    <td>{data.number ?? ""}</td>
                    <td>{data.name ?? ""}</td>
                    <td>{data.latitude ?? ""}</td>
                    <td>{data.longitude ?? ""}</td>
                    <td>
                      <img src={data.profileImg ?? ""} alt="profile" />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
