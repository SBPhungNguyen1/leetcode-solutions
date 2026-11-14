function numUniqueEmails(emails: string[]): number {
    let emailSet = new Set<string>();
    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];

        // split ('@')
        let emailSplit = email.split('@');
        let firstPart : string;
        
        // remove (+)
        if (emailSplit[0].includes('+')) {
            const spl = emailSplit[0].split('+');
            firstPart = spl[0];
        } else {
            firstPart = emailSplit[0];
        }

        // remove(.)
        if (firstPart.includes('.')) {
            const spl = firstPart.split('.');
            firstPart = spl.join('');
        }

        const item = firstPart + '@' + emailSplit[1];
        console.log(item);

        emailSet.add(item);
    }
    return emailSet.size;
};