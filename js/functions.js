function deleteAllCookies() {
    if (document.cookie.length != 0)
    {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}

function displayCookies() {
    var displayCookies = document.getElementById("current_cookie");
    displayCookies.innerHTML = document.cookie;
}

function getCookieArray() {
    var arr = new Array();
    if (document.cookie != '') {
        var tmp = document.cookie.split('; ');
        for (var i = 0; i < tmp.length; i++) {
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }
    return arr;
}



//////////////////////////////////////
function OnClickSelect1Ryokan() {
    document.cookie = 'type=ryokan; Path=/';
    window.location.href = 'select2_purpose.html';
}
function OnClickSelect1Hotel() {
    document.cookie = 'type=hotel; Path=/';
    window.location.href = 'select2_purpose.html';
}
function OnClickSelect1Minshuku() {
    document.cookie = 'type=minshuku; Path=/';
    window.location.href = 'select2_purpose.html';
}

//////////////////////////////////////
function OnClickSelect2Onsen() {
    document.cookie = 'pursose=onsen; Path=/';
}
function OnClickSelect2Meal() {
    document.cookie = 'pursose=meal; Path=/';
}
function OnClickSelect2Sightseeing() {
    document.cookie = 'pursose=sightseeing; Path=/';
}

//////////////////////////////////////
function OnClickSelect3Kakurega() {
    document.cookie = 'hotelfeature=kakurega; Path=/';
}
function OnClickSelect3Large() {
    document.cookie = 'hotelfeature=large; Path=/';
}
function OnClickSelect3View() {
    document.cookie = 'hotelfeature=view; Path=/';
}

//////////////////////////////////////
function OnClickSelect4Under10() {
    document.cookie = 'budget=over10; Path=/';
}
function OnClickSelect4Under5() {
    document.cookie = 'budget=over5; Path=/';
}
function OnClickSelect4Other() {
    document.cookie = 'budget=other; Path=/';
}

//////////////////////////////////////
function OnClickSelect5() {
    var checkbox = document.getElementById("facility_bed");
    if (checkbox.checked)
    {
        document.cookie = 'facility_bed=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_bed=off; Path=/';
    }

    var checkbox = document.getElementById("facility_tatami");
    if (checkbox.checked)
    {
        document.cookie = 'facility_tatami=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_tatami=off; Path=/';
    }

    var checkbox = document.getElementById("facility_japanesefood");
    if (checkbox.checked)
    {
        document.cookie = 'facility_japanesefood=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_japanesefood=off; Path=/';
    }

    var checkbox = document.getElementById("facility_westernfood");
    if (checkbox.checked)
    {
        document.cookie = 'facility_westernfood=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_westernfood=off; Path=/';
    }

    var checkbox = document.getElementById("facility_nonsmoke");
    if (checkbox.checked)
    {
        document.cookie = 'facility_nonsmoke=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_nonsmoke=off; Path=/';
    }

    var checkbox = document.getElementById("facility_smoke");
    if (checkbox.checked)
    {
        document.cookie = 'facility_smoke=on; Path=/';
    }
    else
    {
        document.cookie = 'facility_smoke=off; Path=/';
    }
}

//////////////////////////////////////
function OnClickSelect6Hokkaido() {
    document.cookie = 'area=hokkaido; Path=/';
}
function OnClickSelect6Tohoku() {
    document.cookie = 'area=tohoku; Path=/';
}
function OnClickSelect6Hokuriku() {
    document.cookie = 'area=hokuriku; Path=/';
}
function OnClickSelect6Kanto() {
    document.cookie = 'area=kanto; Path=/';
}
function OnClickSelect6Chubu() {
    document.cookie = 'area=chubu; Path=/';
}
function OnClickSelect6Kinki() {
    document.cookie = 'area=kinki; Path=/';
}
function OnClickSelect6Chugoku() {
    document.cookie = 'area=chugoku; Path=/';
}
function OnClickSelect6Shikoku() {
    document.cookie = 'area=shikoku; Path=/';
}
function OnClickSelect6Kyushu() {
    document.cookie = 'area=kyushu; Path=/';
}
function OnClickSelect6Okinawa() {
    document.cookie = 'area=okinawa; Path=/';
}