function solution(n, queries) {
    const DEFAULT_IP = '192.168.0.';
    const REJECT = 'reject';

    const newQueries = [...queries];
    const ipCollection = new Object();
    const desktopCollection = new Object();
    const result = new Array();

    for (let i = 1; i <= n; i++) {
        ipCollection[i] = {
            usedCount: 0,
            onUse: false,
        };
    }

    newQueries.forEach(query => {
        const [desktop, request] = query.split(' ');

        if (!desktopCollection[desktop]) desktopCollection[desktop] = { recentIp: '' };

        if (request === 'request') {
            const ipsOnUseEqualFalse = new Array();

            if (desktopCollection[desktop]['recentIp'] === '') {
                for (let i = 1; i <= n; i++) {
                    if (!ipCollection[i]['usedCount']) {
                        ipCollection[i]['usedCount'] += 1;
                        ipCollection[i]['onUse'] = true;
                        desktopCollection[desktop]['recentIp'] = i;
                        return result.push(`${desktop} ${DEFAULT_IP}${i}`);
                    }
                    if (!ipCollection[i]['onUse']) ipsOnUseEqualFalse.push(i);
                }

                if (!ipsOnUseEqualFalse.length) return result.push(`${desktop} ${REJECT}`);

                ipCollection[ipsOnUseEqualFalse[0]]['usedCount'] += 1;
                ipCollection[ipsOnUseEqualFalse[0]]['onUse'] = true;
                desktopCollection[desktop]['recentIp'] = ipsOnUseEqualFalse[0];
                result.push(`${desktop} ${DEFAULT_IP}${ipsOnUseEqualFalse[0]}`);
            } else {
                const recentIp = desktopCollection[desktop]['recentIp'];

                if (ipCollection[recentIp]['onUse']) {
                    for (let i = 1; i <= n; i++) {
                        if (!ipCollection[i]['usedCount']) {
                            ipCollection[i]['usedCount'] += 1;
                            ipCollection[i]['onUse'] = true;
                            desktopCollection[desktop]['recentIp'] = i;
                            return result.push(`${desktop} ${DEFAULT_IP}${i}`);
                        }
                        if (!ipCollection[i]['onUse']) ipsOnUseEqualFalse.push(i);
                    }

                    if (!ipsOnUseEqualFalse.length) return result.push(`${desktop} ${REJECT}`);

                    ipCollection[ipsOnUseEqualFalse[0]]['usedCount'] += 1;
                    ipCollection[ipsOnUseEqualFalse[0]]['onUse'] = true;
                    desktopCollection[desktop]['recentIp'] = ipsOnUseEqualFalse[0];
                    result.push(`${desktop} ${DEFAULT_IP}${ipsOnUseEqualFalse[0]}`);
                } else {
                    ipCollection[recentIp]['usedCount'] += 1;
                    ipCollection[recentIp]['onUse'] = true;
                    return result.push(`${desktop} ${DEFAULT_IP}${recentIp}`);
                }
            }
        }

        if (request === 'release') {
            const recentIp = desktopCollection[desktop]['recentIp'];

            ipCollection[recentIp]['onUse'] = false;
        }
    });

    return result;
}
